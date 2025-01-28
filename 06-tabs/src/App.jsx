import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import JobsInfo from "./components/JobsInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch(Error);

  return (
    <main className="jobs-center">
      <section>
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      </section>
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          <JobsInfo jobs={jobs} currentItem={currentItem} />
        )}
      </section>
    </main>
  );
};
export default App;
