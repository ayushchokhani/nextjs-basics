
export default async function blogPost({params}: any) {

    const ids = (await params).postId // ["1", "2", "dde", ]
    

    return <div>
        Post ids: {JSON.stringify(ids)}
    </div>
}