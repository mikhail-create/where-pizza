export const moveToSection = (link: string) => {
    console.log(link);
    const section = document.querySelector(link)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}