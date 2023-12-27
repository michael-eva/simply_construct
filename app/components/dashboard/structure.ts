const sidebarStructure = [
    {
        id: "dashboard",
        title: "Dashboard",
        name: "dashboard",
        parent: true,
        icon: "dasbor",
        link: "/dashboard"
    },
    {
        id: "project",
        title: "Project",
        name: "project",
        parent: true,
        icon: "transaksi",
        child: [
            {
                id: "slab",
                title: "Slab",
                name: "project.slab",
                link: "/dashboard/project/slab",
                icon: "dot"
            },
            {
                id: "walls",
                title: "Walls",
                name: "project.walls",
                link: "/dashboard/project/walls",
                icon: "dot"
            },
        ]
    },
    {
        id: "library",
        title: "Library",
        name: "library",
        parent: true,
        icon: "perusahaan",
        child: [
            {
                id: "wallLib",
                title: "Wall",
                name: "library.wallLib",
                link: "/dashboard/library/walls",
                icon: "dot"
            },
            {
                id: "slabLib",
                title: "Slab",
                name: "library.slabLib",
                link: "/dashboard/library/slab",
                icon: "dot"
            },
            {
                id: "components",
                title: "components",
                name: "library.components",
                link: "/dashboard/library/components",
                icon: "dot"
            },
        ]
    },

    {
        id: "settings",
        title: "Settings",
        name: "settings",
        parent: true,
        icon: "pusatunduhdata",
        link: "/dashboard/settings"
    },
];

export { sidebarStructure };
