import Image from "next/image"
import { Inter } from "next/font/google"
import { useCallback, useReducer, useState } from "react"
import { activities, activityTypeMap } from "@/constants"

// const inter = Inter({ subsets: ["latin"] })

interface State {
  [key: string]: Activity
}

interface Action {
  type: string
  payload: {
    type: string
    activity: string
  }
}

interface Activity {
  activities: string[]
  display: string
  id: number
  type: string
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "addActivity":
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          activities: [
            ...state[action.payload.type].activities,
            action.payload.activity,
          ],
        },
      }
    case "removeActivity":
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          activities: state[action.payload.type].activities.filter(
            (act) => act !== action.payload.activity
          ),
        },
      }
    default:
      throw new Error()
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, activities)
  const [addedActivity, setAddedActivity] = useState<string>("")

  const [openActivityManager, setOpenActivityManager] = useState<boolean>(false)

  const [selectedActivityType, setSelectedActivityType] = useState(
    activityTypeMap.AM
  )

  const [chosenActivity, setChosenActivity] = useState<string>("")

  const [showBorder, setShowBorder] = useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(true)

  const resetChosenActivity = useCallback(() => {
    setChosenActivity("")
    setShowBorder(false)
  }, [])

  const handleAddActivity = useCallback(
    (
      event: React.FormEvent<HTMLFormElement>,
      type: string,
      activity: string
    ) => {
      event.preventDefault()
      //check to see if activity exists
      if (state[type].activities.includes(activity.trim())) {
        alert("Activity already exists")
        return
      }

      dispatch({
        type: "addActivity",
        payload: { type, activity: activity.trim() },
      })
      setAddedActivity("")
    },
    [state]
  )

  const handleRemoveActivity = useCallback(
    (
      // event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      type: string,
      activity: string
    ) => {
      console.log(type, activity)
      // event.preventDefault()
      // event.stopPropagation()
      setTimeout(() => {
        dispatch({
          type: "removeActivity",
          payload: { type, activity },
        })
      }, 0)
    },
    [dispatch]
  )

  const selectRandomActivity = useCallback(() => {
    const randomActivity =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]
    const randomActivity1 =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]
    const randomActivity2 =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]
    const randomActivity3 =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]
    const randomActivity4 =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]
    const randomActivity5 =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]
    const randomActivity6 =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]
    const randomActivity7 =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]
    const randomActivity8 =
      state[selectedActivityType].activities[
        Math.floor(
          Math.random() * state[selectedActivityType].activities.length
        )
      ]

    setShowBorder(false)

    setTimeout(() => {
      setChosenActivity(randomActivity)
    }, 0)
    setTimeout(() => {
      setChosenActivity(randomActivity1)
    }, 50)
    setTimeout(() => {
      setChosenActivity(randomActivity2)
    }, 150)
    setTimeout(() => {
      setChosenActivity(randomActivity3)
    }, 300)
    setTimeout(() => {
      setChosenActivity(randomActivity4)
    }, 500)
    setTimeout(() => {
      setChosenActivity(randomActivity5)
    }, 750)
    setTimeout(() => {
      setChosenActivity(randomActivity6)
    }, 1050)
    setTimeout(() => {
      setChosenActivity(randomActivity7)
    }, 1400)
    setTimeout(() => {
      setChosenActivity(randomActivity8)
      setShowBorder(true)
    }, 1850)
    setTimeout(() => {
      setShowResult(false)
    }, 2200)
    setTimeout(() => {
      setShowResult(true)
    }, 2500)
    setTimeout(() => {
      setShowResult(false)
    }, 2800)
    setTimeout(() => {
      setShowResult(true)
    }, 3100)
  }, [state, selectedActivityType])

  if (openActivityManager) {
    return (
      <main className="p-4 flex items-center justify-center flex-col gap-8">
        <div
          className="w-full bg-gray-700 rounded-3xl relative"
          style={{ maxWidth: 600 }}
        >
          <div className="absolute top-0 right-0 p-2">
            <button onClick={() => setOpenActivityManager(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center border-b border-gray-800 p-2">
            <div className="w-full h-full activityTypeButtonsContainer p-2">
              {/* <div className="flex items-center justify-center w-full h-full activityTypeButtonsContainer p-2"> */}
              {Object.values(activities).map((act) => (
                <button
                  key={act.id}
                  // style={{ fontSize: 15, }}
                  className={`outline-none text-white font-bold activityTypeButtons ${
                    act.type === selectedActivityType
                      ? "outline-4 outline-gray-500"
                      : "outline-gray-600"
                  } rounded-lg p-1 whitespace-nowrap`}
                  onClick={(e) => {
                    e.stopPropagation()
                    resetChosenActivity()
                    setSelectedActivityType(act.type)
                  }}
                >
                  {act.display}
                </button>
              ))}
            </div>
            {/* <span className="font-bold text-2xl text-center">
              {state[selectedActivityType].display} Activities
            </span> */}
          </div>
          <div className="flex items-center justify-center flex-col gap-1 p-2 w-full ">
            {state[selectedActivityType].activities.map((act) => (
              <div
                className="flex justify-between w-full items-center"
                key={act}
              >
                <span className="mt-2 w-full">{act}</span>
                <button
                  className="border-2 border-gray-800 rounded-md p-1 max-h-12"
                  style={{
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={() =>
                    handleRemoveActivity(selectedActivityType, act)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <form
            className="w-full flex items-center justify-center mb-4 mt-4 w-full gap-2"
            onSubmit={(event) =>
              handleAddActivity(event, selectedActivityType, addedActivity)
            }
          >
            <input
              className="placeholder-gray-900 bg-gray-500 border-black border-4 text-gray-900 font-bold p-2 rounded-md outline-white mt-4 w-2/3"
              type="text"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
              name="activity"
              value={addedActivity}
              onChange={(event) => setAddedActivity(event.target.value)}
              placeholder="Type here to add new activity"
            />
            <button
              className="border-2 border-gray-800 rounded-md p-1 max-h-12 mt-4"
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="p-4 flex">
      <div
        className="w-full bg-gray-700 rounded-3xl relative"
        style={{ maxWidth: 600, minWidth: 420 }}
      >
        <div className="absolute top-0 right-0 p-2">
          <button onClick={() => setOpenActivityManager(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`flex items-center justify-center flex-col gap-1 mt-4`}
          style={{ transform: "translateX(-6%)" }}
        >
          <div className="z-1 relative" style={{ width: 500, height: 500 }}>
            <Image src="/slot4.png" alt="slot" fill={true} />
            <div
              className="absolute bg-gray-600 rounded-md p-2"
              style={{ top: 30, left: 107, right: 50, width: 266 }}
            >
              <span className=" text-5xl font-bold text-red-500 text-center flex items-center justify-center">
                Amuzeez
              </span>
            </div>
            {!chosenActivity && (
              <div
                className="absolute"
                style={{ top: 110, left: 92, width: 296 }}
              >
                <span
                  className={`
              ${
                showBorder
                  ? "text-2xl font-bold text-red-500 p-4 h-36 text-center flex items-center justify-center"
                  : "p-4 text-2xl text-black font-bold text-center h-36 flex items-center justify-center"
              }
              `}
                >
                  Pull the lever!
                </span>
              </div>
            )}
            <div
              className="absolute"
              style={{ top: 110, left: 92, width: 296 }}
            >
              <span
                className={`
                ${showResult ? "block" : "hidden"}
                ${
                  showBorder
                    ? "text-2xl font-bold text-red-500 p-4 h-36 text-center flex items-center justify-center"
                    : "p-4 text-2xl text-black font-bold text-center h-36 flex items-center justify-center"
                }
                `}
              >
                {chosenActivity}
              </span>
            </div>
            <div
              className="absolute flex items-center justify-center w-full h-full gap-4 z-11"
              style={{
                bottom: "-110px",
                left: "-7px",
              }}
            >
              {Object.values(activities).map((act) => (
                <button
                  key={act.id}
                  style={{ fontSize: 15 }}
                  className={`outline-none text-black font-bold ${
                    act.type === selectedActivityType
                      ? "outline-4 outline-black"
                      : "outline-gray-600"
                  } rounded-lg p-1 whitespace-nowrap`}
                  onClick={(e) => {
                    e.stopPropagation()
                    resetChosenActivity()
                    setSelectedActivityType(act.type)
                  }}
                >
                  {act.display}
                </button>
              ))}
            </div>
            <div
              className="w-full flex justify-center absolute rounded-full "
              style={{
                top: "22.2%",
                right: "-36.5%",
              }}
            >
              <button
                className="border-2 border-gray-800 rounded-full p-2 bg-black flex items-center justify-center"
                type="button"
                style={{ fontSize: 12, height: "42px", width: "42px" }}
                onClick={selectRandomActivity}
              >
                Spin
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// <main className="flex min-h-screen flex-col items-center justify-between p-24">
// <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//   <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//     Get started by editing&nbsp;
//     <code className="font-mono font-bold">pages/index.tsx</code>
//   </p>
//   <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//     <a
//       className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       By{' '}
//       <Image
//         src="/vercel.svg"
//         alt="Vercel Logo"
//         className="dark:invert"
//         width={100}
//         height={24}
//         priority
//       />
//     </a>
//   </div>
// </div>

// <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//   <Image
//     className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//     src="/next.svg"
//     alt="Next.js Logo"
//     width={180}
//     height={37}
//     priority
//   />
// </div>

// <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//   <a
//     href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//       Docs{' '}
//       <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         -&gt;
//       </span>
//     </h2>
//     <p
//       className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//     >
//       Find in-depth information about Next.js features and API.
//     </p>
//   </a>

//   <a
//     href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//       Learn{' '}
//       <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         -&gt;
//       </span>
//     </h2>
//     <p
//       className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//     >
//       Learn about Next.js in an interactive course with&nbsp;quizzes!
//     </p>
//   </a>

//   <a
//     href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//       Templates{' '}
//       <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         -&gt;
//       </span>
//     </h2>
//     <p
//       className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//     >
//       Discover and deploy boilerplate example Next.js&nbsp;projects.
//     </p>
//   </a>

//   <a
//     href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//     className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
//       Deploy{' '}
//       <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         -&gt;
//       </span>
//     </h2>
//     <p
//       className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
//     >
//       Instantly deploy your Next.js site to a shareable URL with Vercel.
//     </p>
//   </a>
// </div>
// </main>
