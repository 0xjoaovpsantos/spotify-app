import styled from 'styled-components/native';
import AppColors from '../../utils/AppColors';

export const Container = styled.View`
  background-color: ${AppColors.backgroundScreen};
  border-bottom-color: ${AppColors.borderSubItemColor};
  border-style: solid;
  border-bottom-width: 4px;
`;

export const Text = styled.Text`
  color: ${AppColors.fontColor};
`;
