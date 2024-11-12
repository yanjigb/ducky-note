import { subAI, subDesign, subEcommerce, subProductivity, subPrompts, subTools } from "./submenu";

export default [
    {
        items: [
            { text: '🌱 Who I Am', link: '/categories/who-i-am' },
            { text: '💸 Ecommerce', collapsed: true, items: subEcommerce },
            { text: '🤖 AI Tools', collapsed: true, items: subAI },
            { text: '🎨 Design', collapsed: true, items: subDesign },
            { text: '😶‍🌫️ Productivity', collapsed: true, items: subProductivity },
            { text: '✨ Prompts', collapsed: true, items: subPrompts },
            { text: '🛠️ Tools', collapsed: true, items: subTools },
        ]
    }
]
