import styled from 'styled-components/native';
import AppColors from '../../utils/AppColors';

export const Container = styled.View`
  padding: 6px;
  margin: 10px;
  flex-direction: row;
  background-color: ${AppColors.backgroundColor};
  align-items: center;
  border-radius: ${AppColors.borderRadius};
`;

export const Input = styled.TextInput`
  flex: 1;
  color: ${AppColors.fontColor};
  padding-right: 6px;
`;
