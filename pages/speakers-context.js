import Speakers from "../src/components/Speakers/Speakers";
import {
  SpeakersContext,
  SpeakersProvider,
} from "../src/contexts/SpeakerContext";
import Layout from "../src/components/Layout/Layout";

const Page = () => {
  return (
    <Layout>
      <div>
        <SpeakersProvider>
          <Speakers bgColor="bg-gray-500" />
        </SpeakersProvider>
      </div>
    </Layout>
  );
};
export default Page;
