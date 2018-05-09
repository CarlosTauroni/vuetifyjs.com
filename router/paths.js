export default [
  ['', 'home/Home', true],
  ['getting-started/quick-start', 'getting-started/QuickStart'],
  ['getting-started/why-vuetify', 'getting-started/WhyVuetify'],
  ['getting-started/frequently-asked-questions', 'getting-started/FrequentlyAskedQuestions'],
  ['getting-started/sponsors-and-backers', 'getting-started/SponsorsAndBackers'],
  ['getting-started/contributing', 'getting-started/Contributing'],
  ['getting-started/roadmap', 'getting-started/Roadmap'],
  ['layout/pre-defined', 'layout/PreDefined'],
  ['layout/pre-made-themes', 'layout/PreMadeThemes'],
  ['layout/grid', 'layout/Grid'],
  ['layout/grid-lists', 'layout/GridLists'],
  ['layout/spacing', 'layout/Spacing'],
  ['layout/alignment', 'layout/Alignment'],
  ['layout/display', 'layout/Display'],
  ['layout/elevation', 'layout/Elevation'],
  ['layout/sandbox', 'layout/Sandbox'],
  ['style/colors', 'style/Colors'],
  ['style/theme', 'style/Theme'],
  ['style/typography', 'style/Typography'],
  ['style/content', 'style/Content'],
  ['motion/transitions', 'motion/Transitions'],
  ['motion/scrolling', 'motion/Scrolling'],
  ['components/api-explorer', 'components/ApiExplorer'],
  ['store', 'store/Index'],
  ['store/cart', 'store/Cart'],
  ['store/thank-you', 'store/ThankYou'],
  ['store/licensing', 'store/Licensing'],
  ['store/product/:id', 'store/Product', null, r => ({ id: r.params.id })],
  ['guides/vue-cli-3', 'guides/VueCli3'],
  ['guides/server-side-rendering', 'guides/SSR'],
  ['guides/a-la-carte', 'guides/ALaCarte'],
  ['theme-generator', 'ThemeGenerator', true],
  ['examples/:example+', 'examples/Example', true],
  [':section/:component', 'components/Doc', false, true],
  ['*', 'general/404', true]
]
