import { Dispatch, SetStateAction } from 'react';

export interface NavigatePanelProps {
  pageTitle: string
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}
