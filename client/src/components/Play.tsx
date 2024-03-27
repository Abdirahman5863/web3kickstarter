"use client";
import Image from "next/image";
import Link from "next/link";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineChevronLeft,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css/navigation";
import { RxDotFilled } from "react-icons/rx";
import { color } from "framer-motion";
import { Key, ReactNode, useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
const items = [
  {
    id: 1,
    img: "https://ksr-ugc.imgix.net/assets/013/109/703/403ae5619800879c701794c22bc958d1_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1468953360&auto=format&frame=1&q=92&s=d565fb7d2eda06b8b5da3a1b1bfc19cb",
    link: "/View project",
    desc: "945 people backed this",
  },
  {
    id: 2,
    img: "https://ksr-ugc.imgix.net/assets/011/279/786/b30efdb1967dd5cafe7ae76778176f99_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1463676812&auto=format&frame=1&q=92&s=57be7fc37dc1bcfe333677b74e3d2a35",
    link: "/View project",
    desc: "24,150 people backed this",
  },
  {
    id: 3,
    img: "https://ksr-ugc.imgix.net/assets/015/977/413/b77cf15ce8407901538fc676a0ada61a_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1490286508&auto=format&frame=1&q=92&s=600939fb0ea92ac8df6a8acfe2490f6e",
    link: "/ Official site|View project",
    desc: "372 people backed this",
  },
  {
    id: 4,
    img: "https://ksr-ugc.imgix.net/assets/016/035/465/ee3a8f98062445039c17eeeb8136e2b5_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1490711246&auto=format&frame=1&q=92&s=d8cab5cc966c10fa1a89cf73de385128",
    link: "/View project",
    desc: "3,030 people backed this",
  },
  {
    id: 5,
    img: "https://ksr-ugc.imgix.net/assets/016/068/644/e30daff02ca5cfb7ccc6c6ce9ee1d7b0_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1490895281&auto=format&frame=1&q=92&s=3ad81e1eb0d81054f18b07f07577f4e1",
    link: "/View project",
    desc: "15,623 people backed this",
  },
  {
    id: 6,
    img: "https://ksr-ugc.imgix.net/assets/016/617/183/22928ef959ac15e97cf3cad559ac27a8_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1494440321&auto=format&frame=1&q=92&s=c36e328713c00b10c3ad328098a45980",
    link: "/View project",
    desc: "3,780 people backed this",
  },
  {
    id: 7,
    img: "https://ksr-ugc.imgix.net/assets/016/820/637/40143f839bfbde00084704526b28def9_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1495728626&auto=format&frame=1&q=92&s=b52849ba80f557a04e99ef832597ec8e",
    link: "/View project",
    desc: "3,652 people backed this",
  },
  {
    id: 8,
    img: "https://ksr-ugc.imgix.net/assets/017/573/188/d50c9e884d2b6de6d154e8159d7fbda2_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1500490334&auto=format&frame=1&q=92&s=402bc87ef0353fccc143ad29e7524d36",
    link: "/View project",
    desc: "1,669 people backed this",
  },
  {
    id: 9,
    img: "https://ksr-ugc.imgix.net/assets/017/872/423/fbfe39370d46ffb1e4a9502ef1b9deaa_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1502393420&auto=format&frame=1&q=92&s=92e682efa8837ef6da265f75231a7897",
    link: "/View project",
    desc: "1,402 people backed this",
  },
  {
    id: 10,
    img: "https://ksr-ugc.imgix.net/assets/018/441/524/34d18a7b36c77866bb1641ab83b1a3fd_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1506107240&auto=format&frame=1&q=92&s=3e1b8ab757a2ed160cc9cac43417cb6b",
    link: "/View project",
    desc: "1,599 people backed this",
  },
  {
    id: 11,
    img: "https://ksr-ugc.imgix.net/assets/018/441/517/326931616e14781590689ea511ec4d36_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1506107207&auto=format&frame=1&q=92&s=03441d04ee788c2adbd425abaa11dfa0",
    link: "/View project",
    desc: "2,838 people backed this",
  },
  {
    id: 12,
    img: "https://ksr-ugc.imgix.net/assets/019/092/925/e93b4868328e35634d2c8cd330c5687a_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1509997193&auto=format&frame=1&q=92&s=b47de3c3ab634e8a5ac43050f30d91df",
    link: "/View project",
    desc: "599 people backed this",
  },
  {
    id: 13,
    img: "https://ksr-ugc.imgix.net/assets/019/333/592/bfd8e467c5ce44c824c7a2acc1b5fe84_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1511299899&auto=format&frame=1&q=92&s=9e2838b77b6c5598edce262e9779c94f",
    link: "/View project",
    desc: "1,160 people backed this",
  },
  {
    id: 14,
    img: "https://ksr-ugc.imgix.net/assets/019/897/640/2ebb0d6debbcb3f8657709ab59df7f9f_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1516236194&auto=format&frame=1&q=92&s=8e09b541395f056f04f3a923b66b17c1",
    link: "/View project",
    desc: "833 people backed this",
  },
  {
    id: 15,
    img: "https://ksr-ugc.imgix.net/assets/019/965/546/75f9138cc01d3aaff96c719bea519433_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1516830142&auto=format&frame=1&q=92&s=9674f065e87ba96bb031c35c8e2dbc85",
    link: "/View project",
    desc: "1,001 people backed this",
  },
  {
    id: 16,
    img: "https://ksr-ugc.imgix.net/assets/020/543/353/26c96325cb1c2c977d96f8c8fe2f61b5_original.?ixlib=rb-4.1.0&w=700&fit=max&v=1520981153&auto=format&frame=1&q=92&s=7a375d3d79a1f0ad835dfba5de0b9b2c",
    link: "/View project",
    desc: "35,384 people backed this",
  },
  {
    id: 17,
    img: "https://ksr-ugc.imgix.net/assets/021/695/385/a745d4155ab0c3e0d9d0b401ba3bb68b_original.?ixlib=rb-4.1.0&w=700&fit=max&v=1529957337&auto=format&frame=1&q=92&s=5096d4d0abc850c79f09831a96d3b1e0",
    link: "/View project",
    desc: "321 people backed this",
  },
  {
    id: 18,
    img: "https://ksr-ugc.imgix.net/assets/021/942/467/63300c33328e5d5db37b5efbd9e17943_original.?ixlib=rb-4.1.0&w=700&fit=max&v=1531937122&auto=format&frame=1&q=92&s=5d6e19e3af8799e4e5ba5eb19393278e",
    link: "/View project",
    desc: "1,198 people backed this",
  },
  {
    id: 19,
    img: "https://ksr-ugc.imgix.net/assets/021/879/561/6ab1c62bad8fc49250f7f0ab7ecf1ce1_original.?ixlib=rb-4.1.0&w=700&fit=max&v=1531407531&auto=format&frame=1&q=92&s=5cbd368e5dd5b83b304bd5220db43b5d",
    link: "/View project",
    desc: "6,683 people backed this",
  },
  {
    id: 20,
    img: "https://ksr-ugc.imgix.net/assets/021/883/824/c10d4327322641c4a079cd8931d32d1b_original.?ixlib=rb-4.1.0&w=700&fit=max&v=1531432591&auto=format&frame=1&q=92&s=a875781e22e9a2fc5c367c831fd758f4",
    link: "/View project",
    desc: "957 people backed this",
  },
];

const Play = () => {
  const [id, setId] = useState(0);
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_TEMPLATE_SMART_CONTRACT
  );
  const { data: Projects } = useContractRead(contract, "getProject");
  return (
    <div className="flex flex-col items-center text-center justify-center w-screen overflow-hidden xl:gap-[80px] md:gap-[40px] sm:gap-[20px]">
      <div className="flex flex-col text-center items-center pt-12">
        <h1 className="font-mono text-[90px] font- font-medium text-black ">
          Play now
        </h1>
        <p className="text-center text-[20px] font-normal  ">
          Over 200 games made with Kickstarter, now available on Steam
        </p>
      </div>
      <div className="flex flex-wrap w-[90%]  ">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          navigation={true}
          modules={[Pagination, Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {Projects &&
            Projects.map(
              (project: {
                description: ReactNode;
                title: ReactNode;
                image: string;
                id: Key | null | undefined;
              }) => (
                <SwiperSlide key={project.id}>
                  <div
                    key={project.id}
                    className="flex  flex-col justify-center mt-5 items-center pb-[90px]"
                  >
            <div className="flex  border-[6px] border-slate-200 flex-wrap gap-6 w-[160px] h-[80px] md:w-[200px] md:h-[100px] items-center  bg-green-500 lg:w-[400px] 
             hover:border-hidden lg:h-[200px] xl:w-[400px] xl:h-[200px] transition-transform duration-300 transform hover:scale-11 group">

                      <Image
                        src={project.image}
                        alt="Play on Stream"
                        fill
                className="flex flex-wrap  shadow-slate-700"
              
                      />
                      <div className="opacity-0 group-hover:opacity-100 duration-300 hover:animate-[wiggle_3s_ease-in-out_infinite] absolute inset-x-0 bottom-0   top-0 flex justify-center text-center items-center hover:bg-opacity-90 bg-green-900 text-slate-100 k font-normal">
                        Play On Stream
                      </div>
                    </div>

                    <div className="flex items-center justify-center pt-7">
                      <button className="font-bold">{project.title}</button>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="font-norml">{project.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
        </Swiper>
      </div>

      <div className="flex justify-center gap-3 items-center ">
        <Image src="/twitter.png" alt="" width={30} height={30} />

        <Image src="/face.png" alt="" width={30} height={30} />
      </div>
    </div>
  );
};

export default Play;
