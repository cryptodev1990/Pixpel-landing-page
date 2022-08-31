import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../../context/AppContext";
import { faqList } from "./faqlist";
import "../../../App.scss";
import ContactNFT from "../../../assets/images/contact-image.png";

declare type FapProps = {
  question: string;
  answer: string;
  id: number;
  handleFaqClicked: any;
}

const FaqItem = (props: FapProps) => {
  const context = useAppContext();

  return (
    <div className="flex flex-row text-white">
      <div
        className="flex flex-col p-2 py-4 cursor-pointer w-full"
        onClick={() => { props.handleFaqClicked(props.id) }}
      >
        <div className="flex justify-between items-center text-base2 font-semibold py-2 rounded-lg border-app-blue faqitem-bg px-2">
          {props.question}
          <FontAwesomeIcon
            icon={context.faqStatus[props.id] ? faAngleRight : faAngleDown}
            className="mx-2"
          />
        </div>
        {context.faqStatus[props.id] && (
          <>
            <div className={`show mt-2 text-black flex openitem-bg text-base font-light py-2 px-2 rounded-lg`}>
              {props.answer}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Faq() {
  const context = useAppContext();

  const handleFaqClicked = (id: number) => {
    let _faqStatus: boolean[] = [false, false, false, false];
    for(let i = 0; i < context.faqStatus.length; i++) {
      if(id === i) {
        _faqStatus[i] = !context.faqStatus[i];
      }
    }

    context.setFaqStatus(_faqStatus);
  }
  return (
    <>
      {
        context.clickedContact ?
        (
          <div className="contact-bg min-h-screen">
            <div className="show flex flex-col-reverse md:flex-row mx-auto w-full gap-8 py-28 px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36 3xl:px-48">
              <div className="w-full md:w-2/5">
                <div className="flex flex-col gap-8 mx-auto my-auto">
                  <div className="text-white text-6xl font-semibold">
                    We´d love to hear from you
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white h-9 px-2">
                    <input placeholder="Email" />
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white h-36 px-2">
                    <textarea placeholder="Your message" cols={100} className="h-32"></textarea>
                  </div>
                  <div className="flex flex-col tiny:flex-row gap-4">
                    <button className="w-full subscribe-btn text-white h-12 mx-auto" onClick={ () => context.setClickedContact(false) }>Send</button>
                    <button className="w-full subscribe-btn text-white h-12 mx-auto" onClick={ () => context.setClickedContact(false) }>Back</button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <img src={ContactNFT} alt="contact_nft" className="w-full mx-auto" />
              </div>
            </div>
          </div>
        ) :
        (
          <div className="faq-bg min-h-screen">
            <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36 3xl:px-48 py-12 items-center justify-center text-white">
              <div className="flex flex-col lg:flex-row gap-8 w-full">
                <div className="flex items-center w-full lg:w-2/5">
                  <div className="flex font-semibold text-5xl">
                    Have more questions?
                  </div>
                </div>
                <div className="flex flex-col w-full lg:w-3/5">
                  {
                    faqList.map((dt, idx) => {
                      return(
                        <FaqItem {...dt} key={idx} id={idx} handleFaqClicked={handleFaqClicked} />
                      )
                    })
                  }
                </div>
              </div>
              {/* <div className="flex flex-col lg:flex-row gap-4 items-center justify-center text-white w-full">
                <div className="flex flex-col gap-2 w-full lg:w-2/5">
                  <div className="text-self-xl font-semibold">
                    Are you a GAMER?
                  </div>
                  <div className="text-base2 font-normal">
                    Enter your email and subscribe to get the latest news!.
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-3/5">
                  <div className="rounded-lg border-app-blue">
                    <input type="text" className="bg-transparent input-faq h-12 w-72 px-2" placeholder="Enter your email address." />
                  </div>
                  <button className="subscribe-btn text-white w-48 h-12">Subscribe</button>
                </div>
              </div> */}
              <div className="mt-4 flex flex-col lg:flex-row gap-4 items-center justify-center text-white w-full lg:w-3/4">
                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                  <div className="text-self-xl font-semibold">
                    Are you a DEVELOPER?
                  </div>
                  <div className="text-base2 font-normal">
                    Get in touch with us!
                  </div>
                </div>
                <div className="flex gap-2 w-full lg:w-1/2">
                  <button className="subscribe-btn text-white w-48 h-12 mx-auto" onClick={ () => context.setClickedContact(true) }>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Faq;