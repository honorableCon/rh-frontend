import Header from './Header';
import Body from '../../components/Effectifs/Body';

const index = ({effectifs}) => {
  return (
    <div className="grid gap-12">
        <Header/>
        <Body effectifs={effectifs}/>
    </div>
  )
}

export default index