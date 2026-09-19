const testLoaders = {
  mindfulness: () => import('./mindfulness/mindfulness'),
  depresyon: () => import('./depresyon/depresyon'),
  anksiyete: () => import('./anksiyete/anksiyete'),
  obsesyon: () => import('./obsesyon/obsesyon'),
};

export async function loadTest(testSlug) {
  const loader = testLoaders[testSlug];

  if (!loader) {
    return null;
  }

  const module = await loader();
  const testExportName = `${testSlug}Test`;

  return module[testExportName] || null;
}
