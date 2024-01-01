interface Props {
  params: {
    slug: string;
  };
}
import { Videos } from "@/strapi/services/api";
import Template from "@/blocks/template/content";
import { getUserRewards } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const {
    user: { id },
  } = await getSession();

  const [data, purchases] = await Promise.all([
    Videos({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("video"),
    getUserRewards(id),
  ]);

  return (
    <div>
      <Template type="video" data={data} purchases={purchases as any[]} />
    </div>
  );
};

export default Page;
