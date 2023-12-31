import {ways} from '../data'
import WayToTeach from './WayToTeach'

export default function TeachingSection() {

  return(

    <section>
          <h3>
          Hello React
          </h3>
          <ul>
          <WayToTeach ways={ways}/>
          </ul>

        </section>

  )


}