import project from "./project-schema";
import page from "./page-schema";
import projectYouTubeLink from "./project-youtube-links";
import categories from "./categories"
import { blockContent } from "./blockContent";
import {youtube} from './youtube'
import {soundcloud} from './soundcloud'
import {spotify} from './spotify'
import breaker from './break'
import siteSettings from "./siteSettings";

const schemas = [
  project,
  page,
  // projectYouTubeLink,
  blockContent,
  youtube,
  breaker,
  soundcloud,
  siteSettings,
  spotify,
  categories,
  // colors,
  // navigation,
]

export default schemas