import clsx from "clsx";
import Quiz from "./quiz";
import Image from "next/image";
import InfoBlock from "./info";
import Modules from "./modules";
import Counter from "./counter";
import Heading from "@/blocks/atoms/Heading";
import TrailerPlayer from "./players/trailer-player";
import { numbersStringToOrdinals } from "@/libs/convertors";
import VideoPlayer from "@/blocks/molecules/video/VideoPlayer";
import ComicReader from "@/blocks/molecules/comic/ComicReader";
import ActivityPreparation from "./modules/activity-prep";
import { getSession } from "@/strapi/services/me";
type ContentType =
  | "comic"
  | "video"
  | "course"
  | "live:current"
  | "live:upcoming"
  | "live:recorded";

interface Props {
  data: any;
  watched?: any[]; // this only reqeired for course
  purchases: any[];
  type: ContentType;
  achievements?: any[]; // this only reqeired for course
}

const ContentTemplate: React.FC<Props> = async ({
  type,
  data,
  watched,
  purchases,
  achievements,
}) => {
  const {
    id,
    desc,
    grade,
    title,
    price,
    slug,
    mediaUrl,
    thumbnail,
    mentor,
    duration,
  } = data;
  const session = await getSession();
  const isTypeComic = type === "comic";
  const isTypeCourse = type === "course";
  const shareableURL = "this is shareable URL";
  const isTypeUpcomingLive = type === "live:upcoming";
  const isUnlocked = getUnlockedStatus(purchases, id);
  const isConditiontoShowVideoPlayer =
    type === "video" || type.includes("live");

  return (
    <>
      {/* {JSON.stringify(data)}  */}
      <div
        id="container"
        className={clsx(
          isTypeComic
            ? "grid"
            : "grid xl:grid-cols-[auto_350px] gap-5 rounded-xl"
        )}
      >
        <section
          id="header"
          className={clsx(
            isTypeComic &&
              "grid lg:grid-cols-[400px_auto] md:grid-cols-[300px_auto] lg:gap-10 md:gap-5"
          )}
        >
          {isConditiontoShowVideoPlayer && (
            <VideoPlayer
              {...{
                id,
                desc,
                type,
                grade,
                title,
                price,
                mediaUrl,
                thumbnail,
                isUnlocked,
              }}
            />
          )}

          {/* trailer : specially for course  */}
          {isTypeCourse && (
            <TrailerPlayer
              {...{
                title,
                price,
                thumbnail,
                trailerUrl: data.trailer,
              }}
            />
          )}

          {/* image-preview : specially for comic  */}
          {isTypeComic && (
            <div>
              <div className="relative aspect-w-5 aspect-h-7">
                <Image src={thumbnail} alt={title} fill />
              </div>
            </div>
          )}
          <div id="container" className="mt-5">
            <section className="flex justify-between">
              <Heading size="medium" className="font-amar font-bold mb-2">
                {title}
              </Heading>
            </section>
            <section className="grid md:grid-cols-3 grid-cols-2 gap-3 md:my-5 my-3">
              <Infor title="Author" value={mentor} />
              <Infor title="Credits Required" value={`${price} CRD`} />
              <Infor title="Grade" value={numbersStringToOrdinals(grade)} />
              {/* page count : specially for comic  */}
              {isTypeComic && (
                <Infor title="Page Count" value={data?.page_count} />
              )}
            </section>
            <section>
              <p className="font-heading text-gray-600">{desc}</p>
              {/* modules & activity-prep: specially for course  */}
              {isTypeCourse && (
                <>
                  {data?.activity_modules?.prepration_materials && (
                    <ActivityPreparation
                      materials={data?.activity_modules?.prepration_materials}
                    />
                  )}
                  <Modules
                    courseId={id}
                    locked={!isUnlocked}
                    modules={data?.modules}
                    userId={session?.user.id.toString()}
                    achievements={achievements as any[]}
                    activity_modules={data?.activity_modules}
                  />
                </>
              )}

              {/* comic reader : specially for comic  */}
              {isTypeComic && (
                <div className="max-w-md flex flex-col gap-5 mt-5">
                  {isUnlocked && (
                    <ComicReader {...{ id, slug, title, price, duration }} />
                  )}

                  {!isUnlocked && (
                    <InfoBlock
                      {...{
                        id,
                        slug,
                        type,
                        title,
                        price,
                        duration,
                        isUnlocked,
                        shareableURL,
                      }}
                    />
                  )}

                  {data?.quiz && (
                    <Quiz
                      contentId={id}
                      isRewarded={false}
                      contentType="video"
                      locked={!isUnlocked}
                      quizId={data?.quiz.id}
                    />
                  )}
                </div>
              )}
            </section>
          </div>
        </section>
        {!isTypeComic && (
          <section>
            <div className="grid gap-2">
              {!isUnlocked && (
                <InfoBlock
                  {...{
                    id,
                    slug,
                    type,
                    title,
                    price,
                    duration,
                    isUnlocked,
                    shareableURL,
                  }}
                />
              )}

              {isTypeUpcomingLive && <Counter />}

              {data?.quiz && (
                <Quiz
                  contentId={id}
                  isRewarded={false}
                  locked={!isUnlocked}
                  quizId={data?.quiz.id}
                  contentType={type as any}
                />
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ContentTemplate;

const getUnlockedStatus = (purchases: any[], id: any) => {
  return purchases
    .map((pur: any) =>
      typeof pur.content_id == "string"
        ? parseInt(pur.content_id)
        : pur.content_id
    )
    .includes(parseInt(id));
};

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <Heading size="small">{title}</Heading>
      <p className="text-slate-600 font-heading md:text-md text-sm">{value}</p>
    </div>
  );
};
