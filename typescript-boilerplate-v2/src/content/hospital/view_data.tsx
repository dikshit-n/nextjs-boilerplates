import { getError } from "@/utils";
import { List, ListItem } from "@mui/material";
import { useQuery, useQueryClient } from "react-query";
import { viewDataApi } from "@/api";
import { CustomButton } from "@/components";
import { useQueryState } from "@/hooks";

export const ViewDataContent: React.FC = () => {
  const getTodos = async () => {
    return await viewDataApi.viewData();
    // try {
    // } catch (err) {
    //   window.flash({ message: getError(err).message, variant: "error" });
    //   return [];
    // }
  };

  // https://jsonplaceholder.typicode.com/todos
  // const [data = [], loading, {refetch}] = useQuery({name: "todos", getTodos});
  // const [data = [], loading, {refetch}] = useQueryState({name: "todos", getTodos});

  const queryClient = useQueryClient();
  console.log(queryClient.getQueryState("todos"));

  return (
    <List>
      {
        // data
        [].map((el) => (
          <ListItem sx={{ p: 2 }}>{el.title}</ListItem>
        ))
      }
      <CustomButton
      // onClick={() => refetch()}
      //  loading={loading}
      >
        Refresh
      </CustomButton>
    </List>
  );
};

// initialValue
