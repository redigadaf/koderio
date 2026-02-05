// Dynamic color schemes based on category
export const getCategoryTheme = (category: string) => {
    const themes = {
        'Web Design': {
            primary: 'from-purple-600 to-indigo-600',
            accent: 'from-purple-600 to-indigo-600',
            border: 'border-indigo-500/50',
            text: 'text-indigo-600',
            glow: 'shadow-indigo-500/20',
        },
        'Development': {
            primary: 'from-purple-600 to-blue-600',
            accent: 'from-purple-600 to-blue-600',
            border: 'border-blue-500/50',
            text: 'text-blue-600',
            glow: 'shadow-blue-500/20',
        },
        'Branding': {
            primary: 'from-purple-600 to-pink-600',
            accent: 'from-purple-600 to-pink-600',
            border: 'border-pink-500/50',
            text: 'text-pink-600',
            glow: 'shadow-pink-500/20',
        },
    };
    return themes[category as keyof typeof themes] || themes['Web Design'];
};

export type CategoryTheme = ReturnType<typeof getCategoryTheme>;
