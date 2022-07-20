export type FooterLinkSchema = {
    title: string,
    items: FooterItemSchema[]
}

type FooterItemSchema = {
    title: string,
    link: string,
    icon: React.ReactNode
}