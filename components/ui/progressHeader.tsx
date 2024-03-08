import { Progress } from './progress';
interface ProgressHeaderProps {
  val: number; // assuming val is the prop name you want to use
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ val }) => {
  return <Progress value={val} />;
};

export default ProgressHeader;
