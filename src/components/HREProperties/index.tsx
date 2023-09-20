import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import useListProperties from '../../state/hooks/useListProperties'
import styles from './HREProperties.module.scss'
import HREButton from '../atoms/HREButton';
import { useNavigate } from 'react-router-dom';

export default function HREProperties() {

  const properties = useListProperties();
  const navigate = useNavigate();

  return (
    <section className={styles.properties}>
      <div>
        <h2 className={styles.properties__title}>
          Properties for Sale
        </h2>
      </div>
      <div className={styles.properties__cards}>
          {properties.map(property => (
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="property-description"
              height="140"
              image={property.image}
            />
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                fontFamily={'Playfair Display, serif'}
                >
                {property.address}
              </Typography>
              <Typography 
                variant="body2"
                color="text.secondary"
                fontFamily={'DM Sans, sans-serif'}
                >
                {property.type}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                fontFamily={'DM Sans, sans-serif'}
                >
                {property.price}
              </Typography>
            </CardContent>
            <CardActions>
              <HREButton
                value={'Click here to make an offer!'}
                onClick={() => navigate('/contact')}
                />
            </CardActions>
          </Card>
          ))}
      </div>
    </section>
  )
}
