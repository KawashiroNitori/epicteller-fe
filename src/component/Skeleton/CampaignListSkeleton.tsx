import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

export interface PropTypes {
  itemsCount?: number
}

const CampaignListSkeleton = ({ itemsCount = 3 }: PropTypes) => (
  <>
    {Array.from(new Array(itemsCount)).map(() => (
      <Grid item xs sm={6} md={3}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="body2" gutterBottom>
              <Skeleton animation="wave" />
            </Typography>
            <Typography variant="h6">
              <Skeleton animation="wave" />
            </Typography>
            <Typography variant="body2" paragraph>
              <Skeleton animation="wave" />
            </Typography>
            <Typography variant="body2">
              <Skeleton animation="wave" />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </>
);

export default CampaignListSkeleton;
