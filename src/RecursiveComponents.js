const isObject = x => typeof x === "object" && x !== null

const RecursiveComponents = ({ data }) => {
    if (!isObject(data)) {
        return (
            <li>
                {data}
            </li>
        )
    }

    const pairs = Object.entries(data)

    return (
        <>
            {pairs.map(([key, value]) => (
                <li>
                    {key}:
                    <ul>
                        <RecursiveComponents data={value} />
                    </ul>
                </li>
            ))}
        </>
    )
}

export default RecursiveComponents