import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// const Loading = () => {
//     return (
        
//          <div> Loading... </div>
      
//     )
// }
// const SkeletonComponent = () => (
//         <SkeletonTheme color="#202020" highlightColor="grey">
//           <section>
//             <Skeleton height={500} width={50} />
//           </section>
//         </SkeletonTheme>
//       );

// function Loading(props) {
//     return (
//         <div>
//             <h1>{props.title || <Skeleton />}</h1>
//              {props.body || <SkeletonComponent count={10} />}
//         </div>
//     )
// }

function Loading(props) {
         return (
             <div>
                <h1>{props.title || <Skeleton />}</h1>
                  {props.body || <Skeleton count={10} />}
             </div>
        )
     }

export default Loading;