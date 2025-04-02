export interface Mission {
    flight_number: number;
  mission_name: string;
  launch_year: string;
  rocket: {
    rocket_name: string;
  };
  details: string | null;
  launch_success: boolean;
  links: {
    mission_patch: string;
    mission_patch_small: string;
    article_link: string;
    video_link: string;
    wikipedia: string;
  };
}
