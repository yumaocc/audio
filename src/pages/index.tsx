import { useEffect } from 'react';
import styles from './index.less';
import axios  from 'axios';
export default function IndexPage() {
  const getData = () => {
    const options = { 标题：title ， 导演 ：director，主演：actor，地区：region，上映：releaseTime，分类：videoType} 
    axios.get(`https://api.pingcc.cn/video/search/${JSON.stringify('title="123"')}/{完美世界}`).then(res => console.log(res))
  }

  useEffect(()=> {
    getData()
  },[])
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
