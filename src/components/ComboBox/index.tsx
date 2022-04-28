import { Select } from "@chakra-ui/react";
import styles from './styles.module.scss'

export default function ComboBox(){
  return(
    <Select
      // placeholder='All'
      variant='filled'
      bg='black.400'
      w='200px'
      fontWeight='700'      
      _hover={{
        bg: "black.300"
      }}
    >
      <option className={styles.option} value="1">All</option>
      <option className={styles.option} value="2">Math</option>
      <option className={styles.option} value="3">Chemistry</option>
      <option className={styles.option} value="4">English</option>
    </Select>
  )
}