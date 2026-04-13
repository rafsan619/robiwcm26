
export const tourData = {
    name: "Robi World Cup Mania 2026",
    shortName: "robiwcm26",
    codeName: "robiwcm26",
    logo: "/logo.png",
    prizePool: "10,00,000.00 BDT",
    emailAddress: "noreply@email.zeneticesports.com",
}

export type Game = {
    name: string
    codeName: string
    logo: string
    logoClassName?: string
    image: string
    charecterName: string
    link: string
    discordLink: string
    maxRegistration: number
}

const gamesData = {
    efconsole: {
        name: "eFootball 2026 Console",
        codeName: "efconsole",
        logo: "/games/logo/efc-logo.png",
        logoClassName: "max-w-[160px]",
        image: "/games/efc.png",
        charecterName: "eFootball 2026 Console",
        link: "https://www.konami.com/efootball/en/",
        discordLink: "https://discord.gg/BjZaVpVNA4",
        maxRegistration: 128,
    },
    fcmobile: {
        name: "FC Mobile",
        codeName: "fcmobile",
        logo: "/games/logo/eafcm.png",
        logoClassName: "max-w-[100px]",
        image: "/games/fcm.png",
        charecterName: "FC Mobile",
        link: "https://www.ea.com/en/games/ea-sports-fc/fc-mobile",
        discordLink: "https://discord.gg/BjZaVpVNA4",
        maxRegistration: 128,
    },
    fc26: {
        name: "EAFC26",
        codeName: "fc26",
        logo: "/games/logo/fc25.png",
        logoClassName: "max-w-[140px] mb-2",
        image: "/games/fc25.png",
        charecterName: "EAFC26",
        link: "https://www.ea.com/en/games/ea-sports-fc/fc-25",
        discordLink: "https://discord.gg/BjZaVpVNA4",
        maxRegistration: 128,
    },
    efootball: {
        name: "eFootball 2026",
        codeName: "efootball",
        logo: "/games/logo/efootball.png",
        logoClassName: "max-w-[179px]",
        image: "/games/efootball.png",
        charecterName: "eFootball 2026",
        link: "https://www.konami.com/efootball/en/",
        discordLink: "https://discord.gg/BjZaVpVNA4",
        maxRegistration: 1024,
    },

} satisfies Record<string, Game>

export const games: typeof gamesData = gamesData

//rulebook urls must be all lowercase
// export const rulebooks = {
//     fc25: {
//         url: "https://nysbp6tkf5.ufs.sh/f/wKNWEI3FuoqhR5mxKLXKCYZUq8uGzO3WtFVI0EQ6RwcABmfP",
//         title: "Robi World Cup Mania Rulebook",
//         description: `The rulebook for ${tourData.name}`,
//         redirect: false,
//     },

// };

// map the games to the array
export const gamesArray: (Game & { regLink: string })[] = Object.entries(games).map(([key, value]) => ({ ...value, regLink: `/register/${value.codeName}` }));
// map the games to an array with rulebook urls
// export const gamesWithRulebook = gamesArray.map((game) => ({
//     ...game,
//     rulebook: `/rulebooks/${game.codeName.toLowerCase()}`,
// }));


