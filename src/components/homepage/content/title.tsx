export default function Title({
    title,
    subtitle,
}: {
    title: string
    subtitle: string
}) {
    return (
        <hgroup className="block text-center container-hrgroup mx-auto mb-14 md:px-14">
            <h2 className="font-bold text-3xl mb-5 md:text-5xl">{title}</h2>
            <p className="text-lg text-gray-500">{subtitle}</p>
        </hgroup>
    )
}
