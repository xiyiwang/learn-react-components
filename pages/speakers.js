import Speakers from "../src/components/Speakers/Speakers";
// import SpeakerContext from "../src/components/Speakers/SpeakerContext";
import Layout from "../src/components/Layout/Layout";

const Page = () => {
  return (
    <Layout>
      <div>
        {/* <SpeakerContext.Provider value={speakers}> */}
        <Speakers />
        {/* </SpeakerContext.Provider> */}
      </div>
    </Layout>
  );
};
export default Page;
