import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import caseStudies from "./caseStudies";
import services from "./services";
import { marketingCampaignType } from './marketingCampaign'
import {socialPost} from "./socialPost";
import policy from "./policy"
import seo from "./seo"
export const schemaTypes = [seo,post, author, category, blockContent, caseStudies, services
    ,policy,
    marketingCampaignType,
    socialPost,
]
