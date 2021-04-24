import { FunctionComponent } from 'preact';
import { IconNode } from '../../types';

export type PopupMenuButtonProps = {
  icon: IconNode;
};

export const PopupMenuButton: FunctionComponent<PopupMenuButtonProps> = ({ icon }) => {
  return (
    <div className="button">
      <span>
        <img
          alt={icon.imgAlt}
          title={icon.imgTitle}
          style="width: 1.3em; height: 1.3em; object-fit: contain;"
          src={icon.imgSrc}
        />
      </span>
    </div>
  );
};