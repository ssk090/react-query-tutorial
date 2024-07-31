import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCourseByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQuery = ({ email }) => {
  const { data: user } = useQuery({
    queryKey: ["user", email],
    queryFn: () => fetchUserByEmail(email),
  });
  const channelId = user?.data.channelId;

  const { data: course } = useQuery({
    queryKey: ["course", channelId],
    queryFn: () => fetchCourseByChannelId(channelId),
    enabled: !!channelId,
  });

  console.log("USER:", user?.data.channelId);
  console.log("COURSE:", course?.data.courses);
  return <div>DependentQuery</div>;
};
