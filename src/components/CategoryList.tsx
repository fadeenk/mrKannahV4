import DocCardList from '@theme/DocCardList'
import { useDocsSidebar } from "@docusaurus/theme-common/internal";

export default function CategoryList() {
  const sideBar = useDocsSidebar();
  return (
    <DocCardList items={sideBar.items.filter((item) => item.type === 'category')} />
  );
}
