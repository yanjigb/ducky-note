import { subAI, subDesign, subDeveloper, subEcommerce, subExtensions, subMarketing, subProductivity, subPrompts, subYoutube } from "./submenu";

export default [
    {
        items: [
            { text: '🌱 Overview', link: '/categories/overview' },
            { text: '💸 Ecommerce', collapsed: true, items: subEcommerce },
            { text: '🎥 Youtube', collapsed: true, items: subYoutube },
            { text: '👨‍💻 Developer', collapsed: true, items: subDeveloper },
            { text: '🤖 AI Tools', collapsed: true, items: subAI },
            { text: '🎨 Design', collapsed: true, items: subDesign },
            { text: '😶‍🌫️ Productivity', collapsed: true, items: subProductivity },
            { text: '✨ Prompts', collapsed: true, items: subPrompts },
            { text: '🍊 Marketing', collapsed: true, items: subMarketing },
            { text: '🕸️ Extensions', collapsed: true, items: subExtensions },
        ]
    }
]
