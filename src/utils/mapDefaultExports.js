export function mapDefaultExports(modules) {
  const exportMap = {};

  for (const [path, module] of Object.entries(modules)) {
    const [_dot, lang] = path.split('/');
    exportMap[lang] = module.default;
  }

  return exportMap;
}
