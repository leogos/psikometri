import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { loadTest } from '../../data/tests';

import {
  calculateMaxScore,
  calculatePercentage,
  calculateTotalScore,
} from '../../utils/scoring';

import Question from '../../components/Question/Question';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

import styles from './Test.module.css';

function Test() {
  const { testSlug } = useParams();

  const storageKey = `piskometri_${testSlug}`;

  const [test, setTest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [answers, setAnswers] = useState(() => {
    const savedData = localStorage.getItem(storageKey);

    if (!savedData) {
      return {};
    }

    try {
      const parsedData = JSON.parse(savedData);

      return parsedData.answers || {};
    } catch {
      return {};
    }
  });

  const [activeIndex, setActiveIndex] = useState(() => {
    const savedData = localStorage.getItem(storageKey);

    if (!savedData) {
      return 0;
    }

    try {
      const parsedData = JSON.parse(savedData);

      return parsedData.activeIndex ?? 0;
    } catch {
      return 0;
    }
  });

  const [showResult, setShowResult] = useState(false);

  const questionRefs = useRef([]);
  const resultRef = useRef(null);
  const resultButtonRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    setTest(null);

    loadTest(testSlug)
      .then(loadedTest => {
        if (!isMounted) {
          return;
        }

        setTest(loadedTest);
        setIsLoading(false);
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }

        setTest(null);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [testSlug]);

  useEffect(() => {
    if (!test) {
      return;
    }

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        answers,
        activeIndex,
      })
    );
  }, [answers, activeIndex, storageKey, test]);

  const handleSelect = (questionId, value) => {
    const currentIndex = test.questions.findIndex(
      question => question.id === questionId
    );

    const nextIndex = currentIndex + 1;

    setAnswers(previousAnswers => ({
      ...previousAnswers,
      [questionId]: Number(value),
    }));

    if (nextIndex < test.questions.length) {
      setActiveIndex(nextIndex);

      requestAnimationFrame(() => {
        const nextQuestion = questionRefs.current[nextIndex];

        if (!nextQuestion) {
          return;
        }

        nextQuestion.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      });
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!resultButtonRef.current) {
            return;
          }

          resultButtonRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          });
        });
      });
    }
  };

  const handleEdit = index => {
    setActiveIndex(index);

    requestAnimationFrame(() => {
      const question = questionRefs.current[index];

      if (!question) {
        return;
      }

      question.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    });
  };

  const answeredCount = Object.keys(answers).length;

  const isComplete = test && answeredCount === test.questions.length;

  const totalScore = useMemo(() => {
    return calculateTotalScore(answers);
  }, [answers]);

  const maxScore = test ? calculateMaxScore(test) : 0;

  const percentage = calculatePercentage(totalScore, maxScore);

  const resultRange = test?.result?.ranges?.find(
    range => totalScore >= range.min && totalScore <= range.max
  );

  const handleShowResult = () => {
    setShowResult(true);

    localStorage.removeItem(storageKey);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!resultRef.current) {
          return;
        }

        resultRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      });
    });
  };

  const handleContact = () => {
    const name = '[Ad Soyad]';

    const message = `Merhaba, ben ${name}.
${test.title} testindeki skorum: ${totalScore} / ${maxScore}.
Test sonucumu birlikte değerlendirmek için yardımcı olabilir misiniz?`;

    const whatsappNumber = '905404401223';

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  if (isLoading) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <p>Test yükleniyor...</p>
        </div>
      </main>
    );
  }

  if (!test) {
    return (
      <main className={styles.page}>
        <h1>Test bulunamadı.</h1>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      {!showResult && (
        <ProgressBar current={answeredCount} total={test.questions.length} />
      )}

      <div className={styles.container}>
        {!showResult && (
          <>
            <header className={styles.header}>
              <h1>{test.title}</h1>
            </header>

            <div className={styles.questions}>
              {test.questions.map((question, index) => {
                const isOpen = index === activeIndex;

                return (
                  <div
                    key={question.id}
                    ref={element => {
                      questionRefs.current[index] = element;
                    }}
                  >
                    <Question
                      question={question}
                      questionNumber={index + 1}
                      options={question.options || test.options}
                      selectedValue={answers[question.id]}
                      onSelect={handleSelect}
                      onEdit={handleEdit}
                      isOpen={isOpen}
                    />
                  </div>
                );
              })}
            </div>

            {isComplete && (
              <button
                ref={resultButtonRef}
                type="button"
                className={styles.resultButton}
                onClick={handleShowResult}
              >
                Sonucu Göster
              </button>
            )}
          </>
        )}

        {showResult && (
          <div ref={resultRef} className={styles.result}>
            <div className={styles.resultIntro}>
              <h2>Harika! Testi tamamladınız.</h2>

              <p>
                Bu skor, psikolojik durumunuza yönelik genel bir bilgi sunar.
              </p>
            </div>

            <div className={styles.score}>
              {test.result?.type === 'range' ? (
                <>
                  <strong>
                    {totalScore} - {resultRange?.title}
                  </strong>

                  <p className={styles.resultMessage}>{resultRange?.message}</p>
                </>
              ) : (
                <>
                  <p>Toplam puanınız</p>

                  <strong>
                    {totalScore} / {maxScore}
                  </strong>

                  {test.result?.type === 'percentage' && (
                    <>
                      <p>Farkındalık Yüzdeniz: %{percentage}</p>

                      {test.result?.message && (
                        <p className={styles.resultMessage}>
                          {test.result.message}
                        </p>
                      )}
                    </>
                  )}

                  {test.result?.type === 'score' && (
                    <p className={styles.resultMessage}>
                      {test.result.message}
                    </p>
                  )}
                </>
              )}
            </div>

            <div className={styles.resultCta}>
              <h2>Şimdi birlikte değerlendirelim.</h2>

              <p>
                Sonucunuzu ve sizin için ne ifade ettiğini birlikte
                değerlendirmek adına kısa bir görüşme için hemen iletişime
                geçebilirsiniz.
              </p>

              <p className={styles.freeText}>Bu görüşme ücretsizdir.</p>

              <button
                type="button"
                className={styles.contactButton}
                onClick={handleContact}
              >
                Görüşme Planla
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Test;
