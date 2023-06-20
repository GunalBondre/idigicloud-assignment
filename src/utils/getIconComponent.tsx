import { Dashboard, Settings, SnippetFolder } from "@mui/icons-material";

const iconMapping: { [key: string]: React.ComponentType } = {
  dashboard: Dashboard,
  projects: SnippetFolder,
  settings: Settings,
};

const getIconComponent = (
  iconName: string | undefined
): React.ComponentType<{}> | null => {
  if (!iconName) {
    return null;
  }

  const iconComponent = iconMapping[iconName];

  return iconComponent || null;
};

export default getIconComponent;
