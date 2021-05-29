import { useRouter} from 'next/router';
function BlogPosts (){
    const query =  useRouter();
    console.log(query.query);
    return <div>Blog Posts page</div>
}
export default BlogPosts;