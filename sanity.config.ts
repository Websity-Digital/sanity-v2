import {defineConfig} from 'sanity'
import {structureTool, StructureResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from "sanity/presentation";
import {dashboardTool,
    sanityTutorialsWidget,
    projectUsersWidget,
    projectInfoWidget,
} from '@sanity/dashboard'
import {media} from 'sanity-plugin-media'
import { unsplashImageAsset, unsplashAssetSource } from 'sanity-plugin-asset-source-unsplash'
import {schemaTypes} from './schemaTypes'
import {richTablePlugin} from 'sanity-plugin-rich-table'

export const structure: StructureResolver = (S) =>
    S.list().title('Base').items(
        S.documentTypeListItems() // <= example code goes here
    )
export default defineConfig({
    name: 'default',
    title: 'websity-backend',

    projectId: 'm9gt5jhm',
    dataset: 'production',

    plugins: [structureTool(), visionTool(), presentationTool({
        // 2. Point it to your Next.js local development URL
        previewUrl: {
            initial: 'http://localhost:3000',
            previewMode: {
                enable: '/api/draft-mode/enable',

            },
        },
    }),dashboardTool({ widgets: [ sanityTutorialsWidget(), projectInfoWidget(), projectUsersWidget(),]}),
        media(),
        unsplashImageAsset(),
        richTablePlugin({})],
    form: {
        image: {
            assetSources: (previousAssetSources, { schema }) => {
                if (schema.name === 'movie-image') {
                    // remove unsplash from movie-image types
                    return previousAssetSources.filter((assetSource) => assetSource !== unsplashAssetSource)
                }
                return previousAssetSources
            },
        },
    },

    schema: {
        types: schemaTypes,
    },
})