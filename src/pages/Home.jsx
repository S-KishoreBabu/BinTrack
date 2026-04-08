import DustbinLocation from "../features/map/components/DustbinLocation"
import Tab from "../components/ui/Tab"
import Banner from "../features/dashboard/components/Banner"
const Home = () => {
  return (
    <div className='h-max w-full bg-[#F5F5F5] dark:bg-[#171717] pb-100'>
        <Banner />
        <Tab/>
        <DustbinLocation/>
    </div>
  )
}

export default Home