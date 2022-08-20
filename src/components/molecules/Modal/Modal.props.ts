export interface ModalProps {
  title: string;
  open: boolean;
  description?: string;
  onCancel: () => void;
}
