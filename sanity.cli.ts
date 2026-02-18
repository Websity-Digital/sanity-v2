import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: 'm9gt5jhm',
        dataset: 'production'
    },
    deployment: {
        appId: 'f94ide3knob5p1uy0w80cepo',
        /**
         * Enable auto-updates for studios.
         * Learn more at https://www.sanity.io/docs/cli#auto-updates
         */
        autoUpdates: true,
    }
})