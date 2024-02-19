import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Episode.scss';
import HeadingSection from "../heading/HeadingSection";

const episodeData = [
    {
        id: 1,
        img:'https://ichef.bbci.co.uk/images/ic/480xn/p062cl3c.jpg.webp'
    },
    {
        id: 2,
        img:'https://www.usatoday.com/gcdn/-mm-/67d77b70969a0c005d4a65ab900483945262d9b8/c=170-0-2830-2000/local/-/media/USATODAY/None/2014/10/15/635489863754100002-AP-FILM-FURY-68030712.JPG'
    },
    {
        id: 3,
        img:'https://canvas-bridge.tubitv.com/lxhesOQQQd8zrxhV41hkHIazGL8=/0x98:2045x1235/1920x1080/smart/img.adrise.tv/2bf0fbd6-3b9a-4a2f-af3f-30e558bd3789.jpg'
    },
    {
        id: 4,
        img:'https://www.gamespot.com/a/uploads/screen_kubrick/1578/15789737/3342065-leodicaprio.jpg'
    },
    {
        id: 5,
        img:'https://pbs.twimg.com/profile_images/893495864915763201/hRUYE__o_400x400.jpg'
    },
    {
        id: 6,
        img:'https://streamondemandathome.com/wp-content/uploads/2021/06/terminal.jpg'
    },
    {
        id: 7,
        img:'https://assets.mubicdn.net/images/artworks/226126/images-original.png?1621567077'
    },
    {
        id: 8,
        img:'https://www.hometheaterforum.com/wp-content/uploads/2018/07/QuickAndDead_feat.jpg'
    },
]

export default function Episode() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
        <>
        <HeadingSection>Episodes from Movies</HeadingSection>
        <Slider {...settings} className="episode">
          {
            episodeData.map((item, index) => {
                return (
                    <div className="episode__image" key={index}>
                        <img src={item.img} alt="img" />
                    </div>
                )
            })
          }
        </Slider>
        </>
      );
    }