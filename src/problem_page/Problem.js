import styles from './Problem.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faSearch, faPlusCircle, faStar} from "@fortawesome/free-solid-svg-icons";
import Searchbox from './component/searchbox';
import Viewoption from './component/viewoption';
import Problemlist from './component/problemlist';

function ProblemPage() {
    const ic_book = <FontAwesomeIcon icon={faBook}/>
    const ic_search = <FontAwesomeIcon icon={faSearch}/>
    const ic_plus = <FontAwesomeIcon icon={faPlusCircle}/>
    const ic_star = <FontAwesomeIcon icon={faStar}/>

    return (
        <div>
            <div className={styles.pbHeader}>
            <div className={styles.pbContainer}>
                <Searchbox ic_book={ic_book} ic_search={ic_search} ic_plus={ic_plus} />
                <Viewoption />
            </div>
            </div>
            <div className={styles.pbContainer}>
            <Problemlist ic_star={ic_star} ic_book={ic_book} />
            </div>
      </div>
    )
}

export default ProblemPage;