// Dynamic color schemes based on category
export const getCategoryTheme = (category: string) => {
    const themes = {
        'Web Design': {
            primary: 'from-violet-600 to-purple-600',
            accent: 'bg-violet-500',
            border: 'border-violet-500/50',
            text: 'text-violet-600',
            glow: 'shadow-violet-500/20',
        },
        'Development': {
            primary: 'from-blue-600 to-cyan-600',
            accent: 'bg-blue-500',
            border: 'border-blue-500/50',
            text: 'text-blue-600',
            glow: 'shadow-blue-500/20',
        },
        'Branding': {
            primary: 'from-pink-600 to-rose-600',
            accent: 'bg-pink-500',
            border: 'border-pink-500/50',
            text: 'text-pink-600',
            glow: 'shadow-pink-500/20',
        },
    };
    return themes[category as keyof typeof themes] || themes['Web Design'];
};

export type CategoryTheme = ReturnType<typeof getCategoryTheme>;
