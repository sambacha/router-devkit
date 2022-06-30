type LoadingState = {
  state: "loading";
};
type FailedState = {
  state: "failed";
  status: number;
};
type SuccessState = {
  state: "success";
  response: {
    isLoaded: boolean;
  };
};

type State = LoadingState | FailedState | SuccessState;

function request(state: State): string {
  switch (state.state) {
    case "loading":
      return "Uploading...";
    case "failed":
      return `Error status: ${state.status}, while Uploading`;
    case "success":
      return `Uploaded to cloud: ${state.response.isLoaded} `;
  }
}

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface File {
  content: { lines: string }[];
}

type FileReader = File & ErrorHandling;

const writeToAFile = (response: FileReader) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }