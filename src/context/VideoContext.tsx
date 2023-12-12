import { createContext, useContext, useReducer, Dispatch } from "react";
interface VideoContextProps {
  videoArray: any[]; // Update this to the type of your videoArray items
  dispatch: Dispatch<any>;
}
const initialState = {
  videoArray: [],
  dispatch: () => {},
};

const VideoContext = createContext<VideoContextProps>(initialState);

export function VideoProvider({ children }: any) {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  function videoReducer(state: any, action: any) {
    switch (action.type) {
      case "ADD_TO_ARRAY":
        const existingItemIndex = state.videoArray.findIndex(
          (item: any) => item._id === action.payload._id
        );

        if (existingItemIndex !== -1) {
          return state;
        }

        const updatedVideoArray = [...state.videoArray, action.payload];
        return { ...state, videoArray: updatedVideoArray };

      case "DELETE_FROM_ARRAY":
        const updatedArray = state.videoArray.filter(
          (item: any) => item._id !== action.payload._id
        );
        return { ...state, videoArray: updatedArray };

      case "SWAP_VIDEOS":
        const { index1, index2 } = action;
        const newArray = [...state.videoArray];
        [newArray[index1], newArray[index2]] = [
          newArray[index2],
          newArray[index1],
        ];
        return { ...state, videoArray: newArray };

      default:
        return state;
    }
  }

  return (
    <VideoContext.Provider value={{ videoArray: state.videoArray, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
}
export function useCart() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useCart must be used within a VideoProvider");
  }
  return context;
}
