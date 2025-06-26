
export default async function blog({params}: any) {

    const id = (await params).blogId

    return <div className="text-white">
        Blog Id is {id};
    </div>
}