import {useRouter} from 'next/router';

function PortfolioProject(){
    const router = useRouter();
    console.log(router.query.projectId);
    return <div>PortfolioProject</div>
}
export default PortfolioProject;